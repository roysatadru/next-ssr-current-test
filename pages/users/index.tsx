type UserProps = any;

export default function Users(props: UserProps) {
  const { users } = props;

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}

export async function getServerSideProps() {
  const users = await fetch('https://reqres.in/api/users', {
    method: 'GET',
  }).then(res => res.json());

  return {
    props: {
      users,
    }, // will be passed to the page component as props
  };
}
