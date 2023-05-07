// menulis kode pengujian
// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan);
// });

test('ddua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
});

describe('pengujian oleh aritmatika', () => {
    test('#1 dua tambah dua adalah empat', () => {
        expect(2+2).tobe(4);
    });

    test('#2 dua kali tiga adalah enam', () => {
        expect(2+3).tobe(6);
    });

})

