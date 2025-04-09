import Image from "next/image";
import { db } from "./connection";
import { File2CaseSummary } from "@/schema/entity/File2CaseSummary";
import { CaseSummary } from "@/schema/entity/CaseSummary";


export default async function Home() {
  const users = await db.organizations.findOne({where:{OrgId:1}})
  console.log('users: ', users);
console.log("hi");
      const A_list = [
        "https://myblob.blob.core.windows.net/private-il/CaseAnalysis/2025-04-08T14:02:01.190Z/A-1.txt"
      ]
      const B_list = [
        'https://myblob.blob.core.windows.net/private-il/CaseAnalysis/2025-04-08T14:02:01.190Z/B-2.txt'
      ]
      const newCaseSummary = new CaseSummary()
      newCaseSummary.UserId = 'myname@gmail.com'
      newCaseSummary.Title = 'html.docx'
      newCaseSummary.Answer = "Answer test"
      newCaseSummary.IsDeleted = 0
      newCaseSummary.UserSide = 'B'
      newCaseSummary.CreationDate = new Date()

      newCaseSummary.File2CaseSummary =
        [
          ...
          A_list.map((file, index) => {
            const newFile2CaseSummary = new File2CaseSummary()
            newFile2CaseSummary.DisplayName = 'html.docx'
            newFile2CaseSummary.Side = "A"
            newFile2CaseSummary.FilePath = file
            return newFile2CaseSummary
          })
          ,
          ...B_list.map((file, index) => {
            const newFile2CaseSummary = new File2CaseSummary()
            newFile2CaseSummary.DisplayName = 'courts.docx'
            newFile2CaseSummary.Side = "B"
            newFile2CaseSummary.FilePath = file
            return newFile2CaseSummary
          })
        ]

      console.log('newCaseSummary: ', newCaseSummary)

      // let data = await db.caseSummary.save(newCaseSummary)
      // console.log('data: ', data)
  return (
    <div>
      <div>HIIII</div>
      
    </div>
  );
}