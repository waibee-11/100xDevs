import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function SignIn() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 h-fit">
        <div className=""><Auth type="signin" /></div>
        <div className="invisible xl:visible"><Quote /></div>
    </div>
  )
}
