import RegisterForm from "@/components/auth/register-form";
import AuthLayout from "@/app/auth/layout";

export default function page() {
  return (
    <AuthLayout>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </AuthLayout>
  );
}
