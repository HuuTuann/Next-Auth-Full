import AuthLayout from "@/app/auth/layout";
import LoginForm from "@/components/auth/login-form";

export default function page() {
  return (
    <AuthLayout>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </AuthLayout>
  );
}
