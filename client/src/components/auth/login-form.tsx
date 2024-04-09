"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";

import { LoginSchema } from "@/schemas/auth.schema";
import { LoginSchemaType } from "@/types/auth.type";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/auth/card-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { login, getUser } from "@/api/auth";
import axios from "@/api/axios";

export default function LoginForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "nhtuan010302@gmail.com",
      password: "nhtuan0103",
    },
  });

  const onSubmit = (value: LoginSchemaType) => {
    startTransition(async () => {
      try {
        const result = await login(value.email, value.password);
        if (result.statusText !== "OK" || result.status !== 200) {
          throw result;
        }

        console.log(result);

        document.cookie = `sessionToken=${result.data.token}; domain=localhost; path=/`;

        toast({
          title: "Login",
          description: result.data.message,
        });
      } catch (error: any) {
        console.error(error);
        toast({
          title: "Login",
          description: error.response.data.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <CardWrapper
      title="Login"
      description="Enter your credentials"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} method="POST">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    type="text"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your password"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} className="mt-4 w-full">
            {isPending ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
