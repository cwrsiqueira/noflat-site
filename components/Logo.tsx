import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
};

export default function Logo({ variant = "header" }: LogoProps) {
  if (variant === "header") {
    return (
      <Link href="/" className="inline-flex shrink-0 items-center">
        <Image
          src="/logo_fundo_transparente.png"
          alt="NO FLAT Tire Protection"
          width={480}
          height={140}
          className="h-24 w-auto md:h-[7.5rem]"
          priority
        />
      </Link>
    );
  }

  return (
    <div className="inline-flex shrink-0 items-center">
      <Image
        src="/logo_fundo_transparente_circular.png"
        alt="NO FLAT Tire Protection"
        width={200}
        height={200}
        className="h-20 w-20 md:h-24 md:w-24"
      />
    </div>
  );
}
