import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if(includes) {
      return router.pathname.includes(path)
    }
    return router.pathname === path;
  }

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a href="/">{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
