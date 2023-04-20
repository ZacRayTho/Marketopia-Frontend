import React from "react";
import { useRouter } from "next/navigation";

function chat() {
    const router = useRouter();
    console.log(router.query.name)
    // const { name } = router?.query;
    // console.log(name); // 'John'

    return <div>chat</div>;
}

export default chat;
