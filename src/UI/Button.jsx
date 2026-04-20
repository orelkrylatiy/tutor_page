export default function Button({ href, children, className = '', ...props }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} className={className} {...props}>
      {children}
    </Tag>
  );
}
