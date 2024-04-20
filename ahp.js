// AHPのための基本クラス
class AHP {
    constructor(criteria, alternatives) {
        this.criteria = criteria;         // 評価基準
        this.alternatives = alternatives; // 選択肢
        this.criteriaMatrix = [];         // 評価基準の比較行列
        this.priorityVectors = [];        // 各評価基準に対する選択肢の優先度ベクトル
    }

    // 評価基準の比較行列をセット
    setCriteriaMatrix(matrix) {
        this.criteriaMatrix = matrix;
    }

    // 各評価基準における選択肢の比較行列を追加
    addAlternativeMatrix(matrix) {
        this.priorityVectors.push(matrix);
    }

    // 一貫性比率を計算（ダミー実装）
    calculateConsistencyRatio() {
        // 実際の計算ロジックが必要
        return 0.05; // 仮の一貫性比率
    }

    // 結果の優先順位ベクトルを計算
    calculatePriorityVector() {
        // 実際の計算ロジックが必要
        return []; // 空の配列を返す
    }

    // 全体の評価を行う
    evaluate() {
        const consistencyRatio = this.calculateConsistencyRatio();
        if (consistencyRatio > 0.1) {
            throw new Error('一貫性の比率が高すぎます。入力データを確認してください。');
        }
        return this.calculatePriorityVector();
    }
}

// 使用例
const criteria = ['価格', '品質', 'デザイン'];
const alternatives = ['商品A', '商品B', '商品C'];

const ahp = new AHP(criteria, alternatives);
ahp.setCriteriaMatrix([[1, 2, 3], [0.5, 1, 4], [1/3, 1/4, 1]]);
ahp.addAlternativeMatrix([[1, 2], [0.5, 1]]);
ahp.addAlternativeMatrix([[1, 3], [1/3, 1]]);
ahp.addAlternativeMatrix([[1, 4], [1/4, 1]]);

try {
    const result = ahp.evaluate();
    console.log('優先度ベクトル:', result);
} catch (error) {
    console.error(error.message);
}
