export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/954502826791428136/codeshare_logo.png",
      name: "Code Share",
      description: "Discord türkiyenin en büyük discord bot komutları arşivi ve en büyük discord botu uptime, hostlayıcı websitesi. Code Share veritabanında discord botlarına özgü yüzlerce discord bot komutu bulunmaktadır ve kendi discord botunuzu yaratmanıza yardımcı olur.",
      link: "https://codeshare.me",
    },
  ];
  res.status(200).json(data);
};
