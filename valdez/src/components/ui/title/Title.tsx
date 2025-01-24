import { titleFont } from "@/app/config/fonts";

interface Props {
    title: string;
    subtitle?: string;
    className?: string;
  }



export const Title = ({title, subtitle, className}: Props) => {
    return (
        <div className={className}>
            <h1 className={titleFont.className}>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    )
}