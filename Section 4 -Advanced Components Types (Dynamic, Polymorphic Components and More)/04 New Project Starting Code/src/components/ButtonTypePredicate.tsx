import { ComponentPropsWithoutRef } from "react";

type ButtonProp = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};
type AnchorProp = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

function isAnchorTag(props: ButtonProp | AnchorProp): props is AnchorProp {
    return 'href' in props;
}

export default function ButtonTypePredicate(props: ButtonProp | AnchorProp) {
    if (isAnchorTag(props)) {
        return <a className="button" {...props}></a>
    }

    return <button className="button" {...props}></button>
}