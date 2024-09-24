import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { UIComponentError } from "./customError"; // Import the custom error class

// Define the input styles with variants
const inputStyles = cva("", {
    variants: {
        variant: {
            inputSettings: "",
            inputLightMode: "",
            inputDarkMode: "",
        },
    },
    compoundVariants: [
        {
            variant: "inputSettings",
            className: "bg-transparent placeholder:text-slate-700 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
        },
        {
            variant: "inputLightMode",
            className: "bg-transparent placeholder:text-slate-700 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
        },
        {
            variant: "inputDarkMode",
            className: "text-white peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:placeholder-neutral-500 dark:focus:ring-neutral-600",
        },
    ],
    defaultVariants: {
        variant: "inputSettings", // Set a default variant
    },
});

// Define InputProps to include all input attributes and variant props
type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

// Create the Input component with error handling
export const Input = forwardRef<HTMLInputElement, InputProps>(({ variant, className, ...props }, ref) => {

    // Example error check: Throw an error if the user passes an unsupported variant
    const validVariants = ["inputSettings", "inputLightMode", "inputDarkMode"];
    if (variant && !validVariants.includes(variant)) {
        throw new UIComponentError(`Badmashi Nahi Mitar The variant "${variant}" is not supported. Please use one of the following: ${validVariants.join(", ")}`);
    }

    // Example error check: Ensure that certain props are provided when required
    if (!props.placeholder) {
        throw new UIComponentError("The 'placeholder' prop is required for the Input component.");
    }

    return (
        <input
            ref={ref}
            type="text"
            className={cn(inputStyles({ variant }), className)} // Merge styles and className correctly
            {...props}
        />
    );
});

// Set display name for better debugging
Input.displayName = "Input";
