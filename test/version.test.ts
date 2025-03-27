import { getMainBranch, Version, VersionID } from "../src/version";

it("Version tests", () => {
  describe("get main branch with zero versions", () => {
    const versions: Map<VersionID, Version> = new Map();
    const mainBranch = getMainBranch(versions);
    expect(mainBranch.length).toBe(0);
  });
});
