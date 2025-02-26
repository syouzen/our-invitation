import {
  Account,
  Comment,
  Header,
  Map,
  Photos,
  Share,
  SubHeader,
} from './components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-[0px] bg-white">
      <main className="flex flex-col justify-between w-[600px] max-w-[100%] min-h-screen box-border">
        <section className="mt-16 mb-16">
          <Header />
        </section>

        <section className="mt-16 mb-16">
          <SubHeader />
        </section>

        <section className="mt-16 mb-16">
          <Photos />
        </section>

        <section className="mt-16 mb-16">
          <Map />
        </section>

        <section className="mt-16 mb-16">
          <Account />
        </section>

        <section className="mt-16 mb-16">
          <Comment />
        </section>

        <section className="mt-16">
          <Share />
        </section>

        <footer className="flex flex-col items-center justify-center text-[10px] mt-[32px] mb-[16px]">
          <span>
            Developed by <b>seungyeon</b>
          </span>
          <span>
            Designed by <b>hyuna</b>
          </span>
        </footer>
      </main>
    </div>
  );
}
