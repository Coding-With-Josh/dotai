"use client";

import { Suspense } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { signIn } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Enter an email.",
    }),
    password: z.string().min(2, {
      message: "Enter a password.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    }
    else {
      const from = searchParams.get("from") || "/";
      router.push(from);
    }

    toast({
      title: "Logged in.",
    });
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="bg-black/40 backdrop-blur-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Login to access your account</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={() => signIn("github")}>
              <Icons.gitHub />
              GitHub
            </Button>
            <Button variant="outline" onClick={() => signIn("google")}>
              <Icons.google />
              <span className="text-white font-bold text-lg">G</span>
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@mail.com" {...field} />
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
                        <Input placeholder="......" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="text-white w-full">
                  Login
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}
