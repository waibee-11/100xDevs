import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function SignUp() {
  return (
    <div className="grid grid-cols-2">
        <div className=""><Auth type="signup" /></div>
        <div className="invisible xl:visible"><Quote /></div>
        
    </div>
  )
}
