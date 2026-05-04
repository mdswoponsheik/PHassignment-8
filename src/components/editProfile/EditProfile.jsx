// import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { use } from "react";
// import { toast } from "react-toastify";

const EditProfile =  () => {


    // const router = useRouter();

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const userData = Object.fromEntries(formData.entries());
    //     console.log(userData)
    //     const { data, error } = await authClient.signUp.email({
    //         name: userData.name,
    //         image: userData.photo,
    //         callbackURL: "/profile",
    //     })

    //     console.log("response", { data, error });

    //     if (error) {
    //         toast.error(`Signup error: ${error.message}`);
    //         router.push("/");
    //     }

    //     if (data) {
    //         toast.success("Signup successful! Please check your email for confirmation.");
    //         router.push("/profile");
    //     }
    // };
    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <Form className="flex w-120 mx-auto flex-col gap-4 bg-blue-100 rounded-2xl p-6" >
                        <TextField
                            isRequired

                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input name="name" placeholder="Enter Your Name" />
                            <FieldError />
                        </TextField>
                        

                        <TextField
                            isRequired
                            type="text"
                        >
                            <Label>photo</Label>
                            <Input name="photo" placeholder="Enter photo URL" />
                            <FieldError />
                        </TextField>
                        <Button className="w-full flex justify-center text-xl">
                            <Check />
                            Update Profile
                        </Button>
                    </Form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default EditProfile
