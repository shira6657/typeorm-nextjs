"use node"
import { dataSource } from "./data-source";
import { Affix } from "./entity/Affix";
import { Answer } from "./entity/Answer";
import { Answer2Table } from "./entity/Answer2Table";
import { ArticlesIl } from "./entity/Articles_il";
import { BasePricing } from "./entity/BasePricing";
import { Billing } from "./entity/Billing";
import { CaseArguments } from "./entity/CaseArguments";
import { CaseArguments2Arguments } from "./entity/CaseArguments2Arguments";
import { CaseSummary } from "./entity/CaseSummary";
import { Conversation } from "./entity/Conversation";
import { Court_il } from "./entity/Courts";
import { DecisionType } from "./entity/DecisionType";
import { Dictionary } from "./entity/Dictionary";
import { Domain } from "./entity/Domain";
import { File2CaseSummary } from "./entity/File2CaseSummary";
import { InvoiceDetails } from "./entity/InvoiceDetails";
import { Judges } from "./entity/Judges";
import { LegalArgument } from "./entity/LegalArgument";
import { LinksIl } from "./entity/Links_il";
import { OperationalLog } from "./entity/OperationalLog";
import { Organization } from "./entity/Organization";
import { Organizations2BasePricing } from "./entity/Organizations2BasePricing";
import { PaymentInfo } from "./entity/PaymentInfo";
import { PeriodicQuestion } from "./entity/PeriodicQuestion";
import { PricingConstants } from "./entity/PricingConstants";
import { Question } from "./entity/Question";
import { Question2Table } from "./entity/Question2Table";
import { Role } from "./entity/Role";
import { Rules_il } from "./entity/Rules_il";
import { Searches } from "./entity/Searches";
import { SecondaryLegislationIl } from "./entity/SecondaryLegislation_il";
import { SizeDiscounts } from "./entity/SizeDiscount";
import { Transaction } from "./entity/Transaction";
import { User } from "./entity/User";
import { Users2Roles } from "./entity/Users2Roles";
import { Verdicts_il } from "./entity/Verdicts";


let dbInstance = dataSource;
// you can add a try catch
export const dbSource = async () => {

    if(!dataSource.isInitialized) {
        dbInstance = await dataSource.initialize();
        console.log('dbInstance: ', dbInstance.options);
    }
    
    return {
        answers: dbInstance.getRepository(Answer),
        answer2Table: dbInstance.getRepository(Answer2Table),
        caseArguments: dbInstance.getRepository(CaseArguments),
        caseArguments2Arguments: dbInstance.getRepository(CaseArguments2Arguments),
        caseSummary: dbInstance.getRepository(CaseSummary),
        conversations: dbInstance.getRepository(Conversation),
        decisionType: dbInstance.getRepository(DecisionType),
        file2CaseSummary: dbInstance.getRepository(File2CaseSummary),
        judges: dbInstance.getRepository(Judges),
        legalArgument: dbInstance.getRepository(LegalArgument),
        periodicQuestions: dbInstance.getRepository(PeriodicQuestion),
        question2Table: dbInstance.getRepository(Question2Table),
        questions: dbInstance.getRepository(Question),
        searches: dbInstance.getRepository(Searches),
    
        // DATABASE-SPECIFIC
        articles: dbInstance.getRepository(ArticlesIl),
        caseLaws: dbInstance.getRepository(Verdicts_il),
        courts: dbInstance.getRepository(Court_il),
        laws: dbInstance.getRepository(Rules_il),
        regulations: dbInstance.getRepository(SecondaryLegislationIl),
        links: dbInstance.getRepository(LinksIl),
        affix: dbInstance.getRepository(Affix),
        dictionary: dbInstance.getRepository(Dictionary),
        basePricing: dbInstance.getRepository(BasePricing),
        billing: dbInstance.getRepository(Billing),
        domains: dbInstance.getRepository(Domain),
        errors: dbInstance.getRepository(Error),
        invoiceDetails: dbInstance.getRepository(InvoiceDetails),
        operationalLog: dbInstance.getRepository(OperationalLog),
        organizations: dbInstance.getRepository(Organization),
        organizations2BasePricing: dbInstance.getRepository(Organizations2BasePricing),
        paymentInfo: dbInstance.getRepository(PaymentInfo),
        pricingConstants: dbInstance.getRepository(PricingConstants),
        roles: dbInstance.getRepository(Role),
        sizeDiscounts: dbInstance.getRepository(SizeDiscounts),
        transactions: dbInstance.getRepository(Transaction),
        users: dbInstance.getRepository(User),
        users2Roles: dbInstance.getRepository(Users2Roles),
    }
}