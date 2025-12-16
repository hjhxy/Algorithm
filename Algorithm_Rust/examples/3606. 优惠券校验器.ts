function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] {
  const regex = /^[0-9a-zA-Z_]+$/;
  const classes = ["electronics", "grocery", "pharmacy", "restaurant"];
  const res = code.map((el, i) => ({
    code: el,
    businessLine: businessLine[i],
    isActive: isActive[i],
  }));
  return res
    .filter((el) => {
      return (
        regex.test(el.code) && classes.includes(el.businessLine) && el.isActive
      );
    })
    .sort((a, b) => {
      const isEqual =
        classes.indexOf(a.businessLine) - classes.indexOf(b.businessLine);
      if (isEqual == 0) {
        return a.code < b.code ? -1 : 1;
      } else {
        return isEqual;
      }
    })
    .map((el) => el.code);
}
