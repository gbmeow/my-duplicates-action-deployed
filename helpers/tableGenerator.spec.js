var tbl = require('./tableGenerator.js');
describe('generateRows', () => {
    it('returns a single row', () => {
      // Arrange
      const dups = [
        { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } }
      ];
  
      // Act
      const y = tbl.generateRows(dups);
  
      // Assert
      expect(y).toEqual(['<tr><td>A</td><td>B</td><td>C</td></tr>']);
    });

    it('returns multiple row', () => {
        // Arrange
        const dups = [
          { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } },
          { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } }
        ];
    
        // Act
        const y = tbl.generateRows(dups);
    
        // Assert
        expect(y).toEqual(['<tr><td>A</td><td>B</td><td>C</td></tr>', '<tr><td>A</td><td>B</td><td>C</td></tr>']);
      });
  });


  describe('makeTable', () => {
    it('returns table with single row', () => {
      // Arrange
      const dups = [
        { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } }
      ];
  
      // Act
      const y = tbl.makeTable(dups);
  
      // Assert
      expect(y)
      .toEqual('<table><thead><tr><th>Name</th><th>Duplicate Location</th><th>Existing Location</th></tr></thead><tbody><tr><td>A</td><td>B</td><td>C</td></tr></tbody></table>');
    });

    it('returns table with multiple rows', () => {
        // Arrange
        const dups = [
          { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } },
          { name: 'A', existing: { location: 'B' }, duplicate: { location: 'C' } }
        ];
    
        // Act
        const y = tbl.makeTable(dups);
    
        // Assert
        expect(y)
        .toEqual('<table><thead><tr><th>Name</th><th>Duplicate Location</th><th>Existing Location</th></tr></thead><tbody><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>A</td><td>B</td><td>C</td></tr></tbody></table>');
      });

});