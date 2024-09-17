export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1"> Trending </h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {/* {tasks?.map(({ _id }) => <div key={_id}>text</div>)} */}
        </div>

        <div className="podcast_grid"></div>
      </section>
    </div>
  );
}
