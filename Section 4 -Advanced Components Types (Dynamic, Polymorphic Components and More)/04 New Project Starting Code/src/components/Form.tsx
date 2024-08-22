import { type ComponentPropsWithoutRef, type FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

export type FormHandle = {
    clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (data: unknown) => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
    { onSave, children, ...props },
    ref
) {
    const form = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('Cleared using imperative hook');
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        // event.currentTarget.reset();
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...props} ref={form}>
            {children}
        </form >
    )
})

export default Form;