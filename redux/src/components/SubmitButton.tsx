import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus()

    return(
        <>
            { pending ? (
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
                type="submit"
                aria-disabled={pending}
                >
                    loading .........
                </button>
            ) : (
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
                type="submit"
                >
                    submit
                </button>
            )}
        </>
    )
}