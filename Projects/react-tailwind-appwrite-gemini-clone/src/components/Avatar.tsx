import { avatars } from '@/lib/appwrite';

interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  return (
    <figure className='avatar'>
      <img
        src={avatars.getInitials(name, 48, 48)}
        alt={name}
        width={48}
        height={48}
      />
    </figure>
  );
}

export default Avatar;
