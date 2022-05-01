type AvatarProps = {
  img?: string;
  name: string;
};

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2);
}

const Avatar = ({ img, name }: AvatarProps) => (
  <div className="rounded-full overflow-hidden w-12 h-12 bg-primary-100 flex items-center justify-center">
    {img ? (
      <img
        className="w-12 h-12 shadow-inner shadow-neutral-200"
        src={img}
        alt={name}
      />
    ) : (
      <span className="text-base text-neutral-700">{initialsFor(name)}</span>
    )}
  </div>
);
export { Avatar, AvatarProps };
