import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black font-roboto text-sm flex justify-around items-center text-green-50">
      <p>© 2023 Muriel - Tous droits réservés</p>
      <Link href="/MentionsLegales">
        <p>Mentions légales</p>
      </Link>
    </footer>
  );
}
