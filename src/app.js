import { ShopListParser } from "./io-utils/ShopListParser";
import { ShopListReader } from "./io-utils/ShopListReader";
import { ShopListWriter } from "./io-utils/ShopListWriter";
import { ShopListCalculator } from "./ShopListCalculator";

const shopListPath = "src/utils/assets/shopList.txt";
const shopListOutput = "src/utils/assets/result.txt";

const shopListReader = new ShopListReader(shopListPath);
const shopListParser = new ShopListParser();
const shopListWriter = new ShopListWriter(shopListOutput);

const shopListCalculator = new ShopListCalculator(
  shopListReader,
  shopListParser,
  shopListWriter,
);

shopListCalculator.calculate();
