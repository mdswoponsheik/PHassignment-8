"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Loginpage = () => {
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData)
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    // console.log("response", {data, error});

    
        if (error) {
          toast.error(`Login error: ${error.message}`);
          router.push("/");
        }
    
        if (data) {
          toast.success("Login successful!");

          router.push("/");
        } 

  };
  return (
    <div>
      
      <div className=" p-10 ">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-10">Login</h1>
        <Form className="flex w-120 mx-auto flex-col gap-4 bg-blue-100 rounded-2xl p-6" onSubmit={onSubmit}>
          
          <TextField
            isRequired

            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input name="email" placeholder="Enter Your Email" />
            <FieldError />
          </TextField>
          <TextField
          className="relative"
            isRequired
            minLength={8}

            type={isPasswordVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input name="password" placeholder="Enter your password" />
            <span className="absolute right-4 top-9 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              { isPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
            </span>
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <h2>Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link></h2>
        </Form>
      </div>
    </div>
  )
}

export default Loginpage
