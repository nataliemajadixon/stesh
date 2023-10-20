const newTest = ({email, subject, body, children}) => {
    
    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
      );
}
export default newTest