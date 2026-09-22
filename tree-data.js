/* WILL-OATS TREE · MAP — node data
   One file drives the whole map. To add a connect point: add a leaf under its branch.
   leaf: { name, sub, url, back:true if the app has a "← back" link to a hub, private:true if login-gated, ext:true for socials }
   Branch order + names are the 12-branch Will-Oats Tree life architecture. Colors follow the 3D tree's zone spectrum.
*/
const MAP_VERSION = "v0.1.0";

const TRUNK = {
  name: "WILL-OATS TREE",
  sub: "Will-Oats Universe · Fook'n Oats Enterprises",
  ip: "ALL OF THIS IS MINE. YOU CANNOT OWN MY INTELLECTUAL PROPERTY.",
  links: [
    { name: "3D TREE", sub: "the rainbow willow · 12 zones", url: "/" },
    { name: "FOOK'N OATS ENTERPRISES", sub: "HQ site", url: "https://www.fookn-oats.enterprises" },
  ],
};

const BRANCHES = [
  { id: "system", name: "THE SYSTEM", hex: "#FF2222", leaves: [
    { name: "WORKSPACE COMPILER", sub: "FOE workspace build", url: "https://workspace-compiler.vercel.app" },
    { name: "FLEET DASH", sub: "Claude fleet control plane", url: "https://oats-fleet-dash.vercel.app", private: true },
  ]},
  { id: "human", name: "THE HUMAN CONDITION", hex: "#FF5500", leaves: [] },
  { id: "rebuild", name: "REBUILDING THE WORLD", hex: "#FF8800", leaves: [] },
  { id: "art", name: "ART · MUSIC · LIGHT", hex: "#FFCC00", leaves: [
    { name: "SLEEPWELL SWEETHEART", sub: "@sleepwellsweetheart · Instagram", url: "https://www.instagram.com/sleepwellsweetheart/", ext: true },
    { name: "SLEEPWELL MUSIC", sub: "@sleepwellmusic · X", url: "https://x.com/sleepwellmusic", ext: true },
  ]},
  { id: "oats", name: "OATS PROJECTS", hex: "#FFEE00", leaves: [
    { name: "OATS APPS HUB", sub: "internal tools hub", url: "https://oats-apps-hub.vercel.app" },
    { name: "O.A.T.S. MGMT", sub: "tour management · teams", url: "https://oats-mgmt.vercel.app" },
    { name: "OATS HOURS", sub: "hours & invoicing tracker", url: "https://oats-tracker.vercel.app" },
    { name: "WALKIE", sub: "voice memo ingest", url: "https://oats-walkie.vercel.app" },
  ]},
  { id: "meta", name: "META", hex: "#66FF00", leaves: [
    { name: "GO4OATS SHOW", sub: "@the_go4oats_show · YouTube", url: "https://www.youtube.com/@the_go4oats_show", ext: true },
    { name: "EDM OATMEAL", sub: "@theEDMoatmeal · YouTube", url: "https://www.youtube.com/@theEDMoatmeal", ext: true },
    { name: "THE OATS", sub: "@the_oats · Instagram", url: "https://www.instagram.com/the_oats/", ext: true },
    { name: "AESTHETICALLY OATS", sub: "@llamame.avena · TikTok", url: "https://www.tiktok.com/@llamame.avena", ext: true },
  ]},
  { id: "print", name: "PRINT SENSE", hex: "#00FF88", leaves: [] },
  { id: "live", name: "LIVE PRODUCTION", hex: "#00DDFF", leaves: [
    { name: "SUPERTECH-LX APPS", sub: "the LX suite · phone launcher", url: "https://supertech-lx-apps.vercel.app" },
    { name: "LOOM MAP", sub: "cable looms · dimmer beach", url: "https://loom-map.vercel.app", back: true },
    { name: "TRUCK MAP APP", sub: "truck pack layouts", url: "https://truck-map-app.vercel.app" },
    { name: "LX POWERBOOK", sub: "fixtures · dimmer chart", url: "https://lx-powerbook.netlify.app" },
    { name: "BOBENG AVAILABILITY", sub: "holds · booking requests", url: "https://supertech-avail.vercel.app", back: true },
    { name: "CREWFAM", sub: "crew location", url: "https://crewfam.vercel.app" },
    { name: "ROADIE WARS", sub: "GigWars", url: "https://gigwars.vercel.app" },
  ]},
  { id: "ctech", name: "CREATIVE TECHNOLOGY", hex: "#0099FF", leaves: [] },
  { id: "princess", name: "PRINCESS COMMS", hex: "#7744FF", leaves: [
    { name: "PRINCESS COMMS", sub: "starfield", url: "https://princess-comms.vercel.app" },
  ]},
  { id: "root", name: "WAREHOUSE · ROOTSTOCK", hex: "#BB00FF", leaves: [] },
  { id: "glass", name: "THE LOOKING GLASS", hex: "#C8A96E", leaves: [
    { name: "LOOKING GLASS", sub: "WatersAbove intelligence system", url: "https://skynet-waterglass.vercel.app" },
    { name: "CRYPTOS4OATS", sub: "@cryptos4oats · X", url: "https://x.com/cryptos4oats", ext: true },
  ]},
];
