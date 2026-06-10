type projectCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function ProjectCard({ title, subtitle, image }: projectCardProps) {
  return (
    <div>
      <img
        className="h-16 w-16 rounded-lg object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm ">{subtitle}</p>
      </div>
    </div>
  );
}
