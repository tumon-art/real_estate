import { DaysTypes } from "../pages/property/[id]";
import QuestionMark from "./svg/QuestionMark";

const times: string[] = [
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
]

const textProp = `If you'd like to tour this home without leavign
yours, select the video chat tour type and discuss
available options with the agent you are connected with.`

export default function Tour({ days }: { days: DaysTypes[] }) {

  return (
    <div>
      <h3 className=" font-bold text-center ">Schedule A Tour</h3>
      <div className=" flex gap-2  items-center text-gray-400 text-lg">
        <span> Tour Type</span>
        <QuestionMark styles="h-5 text-gray-600 cursor-pointer"
          text={textProp}
        />
      </div>
    </div>
  )
}
