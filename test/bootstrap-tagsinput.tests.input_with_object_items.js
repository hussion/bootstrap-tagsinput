describe("bootstrap-tagsinput", function() {

  describe("with objects as items", function() {
    testTagsInput('<input type="text" />', function() {
      it("adding a item should throw an exception", function() {
        var element = this.$element;
        expect(function() { element.tagsinput('add', {}); }).toThrow("Can't add objects when itemValue option is not set");
      });
    });

    testTagsInput('<input type="text" />', { itemValue: function(item) { return item.value; } }, function() {
      describe("adding an item", function() {
        var item = { value: 1 };
        beforeEach(function() {
          this.$element.tagsinput('add', item);
        });
        it("'items' should return the item", function() {
          expect(this.$element.tagsinput('items')[0]).toBe(item);
        });
        it("val() should return the item's value", function() {
          expect(this.$element.val()).toBe("1");
        });
        it("tag's text should be the item's value", function() {
          expect($('.tag', this.$sandbox).text()).toBe("1");
        });
      });
    });

    testTagsInput('<input type="text" />', { itemValue: 'value' }, function() {
      describe("adding an item", function() {
        var item = { value: 1 };
        beforeEach(function() {
          this.$element.tagsinput('add', item);
        });
        it("'items' should return the item", function() {
          expect(this.$element.tagsinput('items')[0]).toBe(item);
        });
        it("'items' should returns exactly 1 item", function() {
          expect(this.$element.tagsinput('items').length).toBe(1);
        });
        it("val() should return the item's value", function() {
          expect(this.$element.val()).toBe("1");
        });
        it("tag's text should be the item's value", function() {
          expect($('.tag', this.$sandbox).text()).toBe("1");
        });
      });
    });

    testTagsInput('<input type="text" />', { itemValue: function(item) { return item.value; }, itemText: function(item) { return item.text; } }, function() {
      describe("adding an item", function() {
        var item = { value: 1, text: 'some' };
        beforeEach(function() {
          this.$element.tagsinput('add', item);
        });
        it("'items' should return the item", function() {
          expect(this.$element.tagsinput('items')[0]).toBe(item);
        });
        it("val() should return the item's value", function() {
          expect(this.$element.val()).toBe("1");
        });
        it("tag's text should be the item's text", function() {
          expect($('.tag', this.$sandbox).text()).toBe("some");
        });
      });
    });
  });
});