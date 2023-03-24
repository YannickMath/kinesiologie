const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
   
      <a className="icon" style={styles.icon} href="https://www.facebook.com/petillante.rose.7/">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Miuriel MATHIEU' Facebook Profile"></i>
      </a>   
    </div>
  );
};

export default SocialIcons;
