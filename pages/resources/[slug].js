export default function ResourcePage({ post }) {
  return <div>{post}</div>;
}

export async function getStaticPaths() {
  const paths = [
    { params: { resourceId: "1" } },
    { params: { resourceId: "2" } },
    { params: { resourceId: "3" } },
  ];
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const post = [1, 2, 3];
  return {
    // Passed to the page component as props
    props: { post },
  };
}
