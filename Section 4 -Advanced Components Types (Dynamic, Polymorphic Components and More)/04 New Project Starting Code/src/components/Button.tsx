import { ComponentPropsWithoutRef, ReactNode } from "react"

type ButtonProps = {
    element: 'button'
    children: ReactNode
} & ComponentPropsWithoutRef<'button'>;

type AnchorProp = {
    element: 'anchor'
    children: ReactNode
} & ComponentPropsWithoutRef<'a'>;

type ButtonOrAnchorProps = ButtonProps | AnchorProp

export default function Button(props: ButtonOrAnchorProps) {

    const { element } = props
    if (element === 'anchor') {
        const { children } = props;
        return <a className="button" {...props}>{children}</a>
    }

    const { children } = props;
    return <button className="button" {...props}>{children}</button>

}