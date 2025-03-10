import { AnotherType, SomeCustomType } from "@my-monorepo/types";



export const TestButton = (props: {
    customType: SomeCustomType;
    anotherType: AnotherType;
}) => {


    return (
        <button onClick={() => console.log('Hello World!')}>
            Test Button
        </button>
    )
}