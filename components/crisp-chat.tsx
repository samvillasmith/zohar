"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b405c12e-3f4c-4810-a0b4-9ae716c31e95");
    }, []);

    return null;
};