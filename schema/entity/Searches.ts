import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: "Searches" })
export class Searches {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'varchar', length: 255, name: 'userId' })
    UserId!: string;

    @Column({ type: 'datetime', name: 'creationDate' })
    CreationDate!: Date;

    @Column({ type: 'nvarchar', length: 'MAX', name: 'query' })
    Query!: string;
}

export
    interface SearchProps {
    searchInput: {
        [key: string]: string | string[] | {
            proceeding_type: string
            proceeding_number: string
            sides: string
        } | null
    }
    setSearchInput: (
        property: string,
        newValue: string | string[] | boolean | null
    ) => void
}

export const getCommonConditions = (param: string, condition: any) => {
    let conditions = []
    switch (param) {
        case "court":
            conditions.push({
                phrase: {
                    query: condition,
                    path: "metadata.court",
                },
            })
            break;

        case "proceedingNumber":
            conditions.push({
                phrase: {
                    query: condition,
                    path: "metadata.proceeding_number",
                },
            })
            break;

        case "judge":
            conditions.push({
                phrase: {
                    query: condition,
                    path: "metadata.judges",
                },
            })
            break;

        case "rule":
            conditions.push({
                phrase: {
                    query: condition,
                    path: "metadata.rules",
                },
            });
            break;

        case "sides":
            conditions.push({
                text: {
                    query: condition,
                    path: "metadata.sides",
                    matchCriteria: "all",
                },
            });
            break;

        case "content":
            let content = condition.split(' "');
            let startsWithQuote: Number =
                condition?.trimStart().startsWith('"') ||
                condition?.trimStart().startsWith("'");
            let phrases: string[] = [];
            let text: string[] = [];
            if (content.length > 1 || startsWithQuote) {
                for (let i = 0; i < content.length; i++) {
                    let newContent = content[i].split('" ');
                    if (newContent[1]) {
                        phrases.push(newContent[0].replace(/['"]+/g, ""));
                        text.push(newContent[1].replace(/['"]+/g, ""));
                    } else {
                        if ((i == 0 && startsWithQuote) || content[i].endsWith('"'))
                            phrases.push(content[i].replace(/['"]+/g, ""));
                        else text.push(content[i]);
                    }
                }
            } else text = content;

            phrases.forEach((phrase: string) => {
                if (phrase?.trim() != "")
                    conditions.push({
                        phrase: {
                            query: phrase?.trim(),
                            path: "text",
                        },
                    });
            });
            if (text.length > 0)
                conditions.push({
                    text: {
                        query: text.join(" ")?.trim(),
                        path: "text",
                        matchCriteria: "all",
                    },
                });
            break;

        case "date":
            if (condition.startDate !== "" && condition.endDate !== "") {
                conditions.push({
                    range: {
                        path: "metadata.verdict_date",
                        gte: new Date(condition.startDate),
                        lt: new Date(condition.endDate),
                    },
                });
            } else if (condition.startDate !== "") {
                conditions.push({
                    range: {
                        path: "metadata.verdict_date",
                        gte: new Date(condition.startDate),
                    },
                });
            } else if (condition.endDate !== "") {
                conditions.push({
                    range: {
                        path: "metadata.verdict_date",
                        lte: new Date(condition.endDate),
                    },
                });
            }
            break;


    }
    return conditions
}


