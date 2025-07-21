import { Suspense } from "react";
import { LoginForm } from "../components/LoginForm";

export default function Page() {    
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm/>
            </Suspense>
        </div>
    );
}