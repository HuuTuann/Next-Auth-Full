"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";

import { RegisterSchema } from "@/schemas/auth.schema";
import { RegisterSchemaType } from "@/types/auth.type";
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
import { register } from "@/api/auth";

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (value: RegisterSchemaType) => {
    startTransition(async () => {
      try {
        const result = await register(value.email, value.password, value.name);
        if (result.statusText !== "Created" || result.status !== 201) {
          throw result;
        }
        // instance.defaults.headers.common["Authorization"] =
        //   `Bearer ${result.data.token}`;
        toast({
          title: "Register",
          description: result.data.message,
        });
      } catch (error: any) {
        toast({
          title: "Register",
          variant: "destructive",
          description: error.response.data.message,
        });
      }
    });
  };

  return (
    <CardWrapper
      title="Register"
      description="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your name"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    type="email"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Confirm your password"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="mt-4 w-full">
            {isPending ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
