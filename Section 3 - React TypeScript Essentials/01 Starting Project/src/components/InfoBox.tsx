import { ReactNode } from "react"

type HintBoxProps = {
    mode: 'hint'
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning'
    severity: 'high' | 'medium' | 'low'
    children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) {

    const { mode, children } = props;

    if (mode === 'hint') {
        return (
            <div className="infobox infobox-hint">
                <p>{children}</p>
            </div>
        )
    }

    const { severity } = props;
    return (
        <div className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </div>
    )
}