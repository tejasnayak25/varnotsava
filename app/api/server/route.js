// import { collection } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { NovusBase } from "@/lib/models";

// let base = collection(NovusBase);

// export async function GET(request) {
//     let data = await base.get();
//     data = data.docs.map(doc => doc.data());
//     return NextResponse.json({
//         data: data
//     });
// }

export async function GET(request) {
    return NextResponse.json({
                data: "Hi"
            });
}