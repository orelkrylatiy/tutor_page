export default function Button({ href, children, className = '', type, ...props }) {
  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? 'button'} className={className} {...props}>
      {children}
    </button>
  );
}
