// import repositoryFactory, {NET_TRUYEN} from "~/services/repositoryFactory";
// import {FilterRequest} from "~/services/request";

export default defineEventHandler(async (event) => {
  // const API = repositoryFactory(NET_TRUYEN);
  // const query = useQuery(event);
  // const {genres} = query;

  // const filterRequest: FilterRequest = {
  //     page: 1,
  //     genres: genres as string,
  //     sort: "new" as any,
  //     status: "all",
  // }
  // const mangas = await API?.filter(filterRequest);
  // if (mangas.status !== 200)
  //     return []

  // return mangas?.data.data.filter(spotlight => spotlight.review !== '');

  return [
    {
      id: 1,
      name: "Lão Đại Xuyên Không Gả Cho Phu Quân Mù",
      thumbnail: "/images/spotlight-7.png",
      slug: "lao-dai-xuyen-khong-ga-cho-phu-quan-mu-62908",
      updatedAt: "[Cập nhật lúc: 14:43 19/07/2022]",
      view: "795.422",
      author: "Đang cập nhật",
      status: "Đang cập nhật",
      follow: "25.727",
      genres: ["Drama", "Manhua", "Ngôn Tình", "Romance", "Truyện Màu"],
    },
    {
      id: 1,
      name: "Kiều Mỵ Phu Lang, Tại Tuyến Lục Trà",
      thumbnail: "/images/spotlight-1.png",
      slug: "kieu-my-phu-lang-tai-tuyen-luc-tra-53686",
      updatedAt: "[Cập nhật lúc: 14:43 19/07/2022]",
      view: "2.422.242",
      author: "Đang cập nhật",
      status: "Đang cập nhật",
      follow: "38.423",
      genres: ["Drama", "Manhua", "Ngôn Tình", "Romance", "Truyện Màu"],
    },
    {
      id: 4,
      name: "Cô Vương Quả Nữ",
      thumbnail: "/images/spotlight-5.png",
      slug: "co-vuong-qua-nu-54444",
      updatedAt: "[Cập nhật lúc: 14:43 19/07/2022]",
      view: "6.763.201",
      author: "Đang cập nhật",
      status: "Đang cập nhật",
      follow: "46.578",
      genres: ["Comedy", "Manhua", "Ngôn Tình", "Truyện Màu"],
    },
    {
      id: 2,
      name: "Mau Xuyên Không Rửa Tội Cho Nhân Vật Phản Diện",
      thumbnail: "/images/spotlight-2.png",
      slug: "mau-xuyen-khong-rua-toi-cho-nhan-vat-phan-dien-45007",
      updatedAt: "[Cập nhật lúc: 14:43 19/07/2022]",
      view: "5.934.249",
      author: "Đang cập nhật",
      status: "Đang cập nhật",
      follow: "54.343",
      genres: ["Cổ đại", "Manhua", "Ngôn Tình", "Truyện Màu", "Xuyên Không"],
    },
    {
      id: 3,
      name: "Manh Sư Tại Thượng",
      thumbnail: "/images/spotlight-3.png",
      slug: "manh-su-tai-thuong-23169",
      updatedAt: "[Cập nhật lúc: 14:43 19/07/2022]",
      view: "59.158.407",
      author: "Đang cập nhật",
      status: "Đang cập nhật",
      follow: "120.228",
      genres: ["Cổ đại", "Manhua", "Ngôn Tình", "Truyện Màu"],
    },
  ];
});