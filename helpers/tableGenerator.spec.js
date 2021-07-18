var tbl = require('./tableGenerator.js');
describe('generateRow', () => {
    it('returns row', () => {
      // Arrange
      const dups = [
        { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } }
      ];
  
      // Act
      const y = tbl.generateRow(dups);
  
      // Assert
      expect(y).toEqual(['<tr><td>A</td><td>B</td><td>C</td></tr>']);
    });
  });