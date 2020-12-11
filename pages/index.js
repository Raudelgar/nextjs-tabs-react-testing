import Head from 'next/head';
import { useRouter } from 'next/router';
import { Tabs } from '@/components/tabs';
import styles from 'styles/Home.module.css';

function Home({ initialTab }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>React Tabs</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Tabs initialTab={initialTab}>
					<div label='Tab 1'>
						<h2>Title Tab 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Perspiciatis illum aperiam molestiae quidem consequatur quod fugit
							delectus suscipit rem, eligendi necessitatibus labore voluptatem
							exercitationem repellat, vitae eveniet in similique temporibus.
						</p>
					</div>
					<div label='Tab 2'>
						<h2>Title Tab 2</h2>
						<p>
							Sunt sint et odio rem vero laboriosam nobis modi dolor
							consequatur, porro magnam, voluptates, incidunt minima ipsam
							voluptatem! Rem recusandae reprehenderit, libero unde amet
							voluptatem iusto architecto?
						</p>
					</div>
					<div label='Tab 3'>
						<h2>Title Tab 3</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
							incidunt vitae asperiores reprehenderit soluta esse quasi suscipit
							eius veniam. Voluptatibus maiores magni nisi repudiandae quam!
							Facere necessitatibus, nisi totam dolor recusandae aliquam
							reprehenderit placeat vero et optio iusto provident fuga
							cupiditate quo accusantium fugiat quis voluptas aperiam eos magni
							enim reiciendis? Ea voluptatum magnam distinctio officiis
							molestias consequuntur iusto hic quia inventore, non, modi
							excepturi necessitatibus aspernatur, similique voluptatem
							doloremque deleniti neque ad asperiores sed ut! Quibusdam
							adipisci, perferendis nostrum est doloribus quas praesentium
							facere dolores, dolorum illo ducimus sit eaque fugit tempore,
							minima cum aperiam! Iste, fugiat? Temporibus, similique.
						</p>
					</div>
				</Tabs>
			</main>
		</div>
	);
}

Home.getInitialProps = ({ query }) => ({ initialTab: query.tab });

export default Home;
