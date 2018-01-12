function isMerge(s, part1, part2) {
	return false;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

Test.expect(isMerge('codewars', 'code', 'wars'));
Test.expect(isMerge('codewars', 'cdw', 'oears'));
Test.expect(!isMerge('codewars', 'cod', 'wars'));