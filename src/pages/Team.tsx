import Head from 'next/head'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { getAPIClient } from '../services/axios'
import TeamContent from '../components/TeamContent'
import Nav from '../components/nav'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Team</title>
      </Head>
      <Nav />
      <TeamContent />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { 'nextauth.token': token } = parseCookies(ctx);
  if (!token) {
    return {redirect: {destination: '/',permanent: false,}}
  }
  return {props: {}}
}