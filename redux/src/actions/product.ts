"use server"

import { Product } from "@/types"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addProduct(product: Product) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if(res.ok){
        revalidatePath('/products');
        redirect('/products');
    }
}

export async function deleteProduct(id: string | undefined) {
    const res = await fetch ("", {
        method: "DELETE"
    });

    const result = await res.json();
    revalidatePath('/products');
    console.log(result);

}

