import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export default function CardWrapper({
  children,
  title,
  description,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: Readonly<Props>) {
  return (
    <Card className="w-[400px] rounded-md shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="justify-center">
        <Link
          href={backButtonHref}
          className="underline-sky-500 text-sm underline underline-offset-2 hover:text-sky-500"
        >
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}
